#!/bin/sh

git filter-branch -f --env-filter '

an="$GIT_AUTHOR_NAME"

am="$GIT_AUTHOR_EMAIL"

cn="$GIT_COMMITTER_NAME"

cm="$GIT_COMMITTER_EMAIL"

if [ "$GIT_COMMITTER_EMAIL" = "[liuzhiwei3220@hydee.cn]" ]

then

    cn="[A.wei]"

    cm="[lzw22@qq.com]"

fi

if [ "$GIT_AUTHOR_EMAIL" = "[lzw22@qq.com]" ]

then

    an="[A.wei]"

    am="[lzw22@qq.com]"

fi

export GIT_AUTHOR_NAME="$an"

export GIT_AUTHOR_EMAIL="$am"

export GIT_COMMITTER_NAME="$cn"

export GIT_COMMITTER_EMAIL="$cm"
'
