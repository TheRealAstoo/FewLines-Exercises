# Your own Finder

## Context and objectives

Now, it's time to do some file manipulation, a good way to practice that is to rewrite a simple **Finder** in command line.

## Specs

First things first, write a NodeJS program which can display the current directory.

Eg:

```
❯ yarn start

0. ../
1. my_folder_1/
2. my_folder_2/
3. my_file_1
4. my-finder.js
5. README.md
```

Then, ask the a question to the user. She/He should choose a number available on the screen.

If the input refers to a directory, then display the content of this directory.

```shell
❯ yarn start

0. ../
1. my_folder_1/
2. my_folder_2/
3. my_file_1
4. my-finder.js
5. README.md

Choose a number > 2

0. ../
1. my_sub_folder_1/
2. a_sample_text_file.txt

Choose a number >
```

Else, if the input refers to a file, display the content of the file.

Eg:

```shell
❯ yarn start

0. ../
1. my_sub_folder_1/
2. a_sample_text_file.txt

Choose a number > 2

I\'m a text file ! Youhou!
```

## Tests

There are no tests for this exercise. The only real test is for your program to work 😉.
