# Basic FS

## Context and objectives

Handling the file system is an essential point for application development. Let's try to implement some useful functions.

As a reminder, here are the links of the documentation of modules `fs` and `path`:
- https://nodejs.org/api/fs.html
- https://nodejs.org/api/path.html

## Specs

Implement functions in the `src/basicFs.js` file.

## Get the current directory

Implement a `pwd()` function that **returns** the current working directory as a string.

## Create a file

`touch` is a terminal command that allows to create an empty file. It is a needful command of the Unix world.

Using the file creation commands, create a `touch` function which must take a file path as a parameter.
If an error occurs, display it with `console.warn`.

## Delete a file

Implement a function `deleteFile(filePath)` which deletes the file (referenced by its path) passed as an argument.

It shouldn't print anything if all went well and display a warning via `console.warn` if a problem occurred.

## Copy paste a file

Implement this function in the `basicFs` module. The function `copyPaste` should take two parameters:
- the source file path
- the target file path

It must copy the source file into another file.

It shouldn't print anything if all went well and display a warning via `console.warn` if a problem occurred.

## Cut paste a file

Implement this function in the `basicFs` module. The function `cutPaste` should take two parameters:
- the source file path
- the target file path

It must copy the source file into another file, then delete the source file.

It shouldn't print anything if all went well and display a warning via `console.warn` if a problem occurred and it must delete the source file.
