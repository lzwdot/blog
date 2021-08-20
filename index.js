const camelizeRE = /_(\w)/g
const camelize = (str) => {
  return str.replace(camelizeRE, (d,c) => {
    console.log(d,c)
    return c ? c.toUpperCase() : ''
  })
}

console.log(camelize('user_name'))

// console.log('user_name_id'.replace(camelizeRE,''))