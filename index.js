class MyPromise {
  state = 'pending' //状态 pending,fulfilled,rejected
  value = undefined // 成功后的值
  reason = undefined // 失败后的原因

  resolveCallbacks = [] // pending 下，存储成功的回调
  rejectCallbacks = [] // pending 下，存储失败的回调

  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        // 状态变化后，函数执行
        this.resolveCallbacks.forEach(fn => fn(this.value))
      }
    }

    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        // 状态变化后，函数执行
        this.rejectCallbacks.forEach(fn => fn(this.reason))
      }
    }

    try {
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      resolveHandler(err)
    }
  }

  then(fn1, fn2) {
    // 当 pending 下，fn1,fn2 存储到 callbacks 中
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e

    // 函数还没执行，返回新的 promise
    if (this.state === 'pending') {
      const p1 = new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        })
        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn1(this.reason)
            reject(newReason)
          } catch (err) {
            reject(err)
          }
        })
      })
      return p1
    }

    // fn1 函数执行，返回新的 promise
    if (this.state === 'fulfilled') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (err) {
          reject(err)
        }
      })
      return p1
    }

    // fn2 函数执行，返回新的 promise
    if (this.state === 'rejected') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (err) {
          reject(err)
        }
      })
      return p1
    }
  }

  // catch 就是 then 的一个语法糖，简单模式
  catch(fn) {
    return this.then(null, fn)
  }
}

// 全局静态方法
MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => resolve(value))
}

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}

MyPromise.all = function (promiseList = []) {
  const p1 = new MyPromise((resolve, reject) => {
    const result = [] // 存储 promiseList 所有的结果
    const length = promiseList.length
    let resolvedCount = 0

    promiseList.forEach(p => {
      p.then(data => {
        result.push(data)

        // resolvedCount 必须在 then 里面做 ++
        // 不能使用 foreach 的 index，因为 index 是同步的
        resolvedCount++
        if (resolvedCount == length) {
          // 已经到最后一个
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p1
}

MyPromise.race = function (promiseList = []) {
  let resolved = false // 标记
  const p1 = new MyPromise((resolve, reject) => {
    promiseList.forEach(p => {
      p.then(data => {
        if (!resolved) {
          resolve(data)
          resolved = true
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p1
}