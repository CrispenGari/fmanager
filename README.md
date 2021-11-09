### fmanager

This is a command line application that will help you to manage files and folders using the `cmd`. With this tool you can be able to do a lot of files and folder manipulations like:

1. creating a file
2. creating a folder
3. deleting a file
4. deleting a folder
5. renaming a file
6. rename a folder
7. etc

### Demo `(Screen shot)`

<p align="center">
<img src="https://github.com/CrispenGari/fmanager/blob/main/bandicam%202021-11-03%2013-58-25-216.jpg" alt="demo" width="100%">
</p>

### Installation

In order for you to use this package you need to install it globally as follows:

> This package requires [`Node.js`](https://nodejs.org/en/download/) to be installed in your computer. And if you want to install it using `yarn` package manager you have to make sure that `yarn` is installed on your computer.

1. using `yarn`

```shell
yarn global fmanager
```

2. using `npm`

```shell
npm install -g fmanager
```

### Usage

This is a command line application that is used to manipulate folders and files using the command line. You can run all the available commands which are listed bellow:

### Available commands

0. version

To check if the `fmanager` has been installed on your computer you should run the following command:

```shell
fmanager -v
# or
fmanager --version
```

> Note that this command will give you the currently installed version of the `fmanager` package. You can get a specific version by installing it globally as follows:

```shell
npm i -g fmanager@<version>
# example
npm i -g fmanager@1.0.0
```

1. creating a file

```shell
fmanager touch-file <filename>

# example
fmanager touch-file test.js
```

This will create a file called `test.js` in the current directory.

2. creating a folder

```shell
fmanager touch-folder <foldername>

# example
fmanager touch-folder test
```

This will create a folder called `test` in the current directory.

3. deleting a file

```shell
fmanager rm-file <foldername>

# example
fmanager rm-file test.py
```

This will delete a file called `test.py` in the current directory.

4. deleting a folder

```shell
fmanager rm-folder <foldername>

# example
fmanager rm-folder test
```

This will delete a folder called `test` in the current directory.

5. renaming a folder

```shell
fmanager rename-folder <old-foldername> <new-foldername>

# example
fmanager rename-folder test test1
```

This will renames a folder called `test` to `test1` in the current directory.

6. renaming a file

```shell
fmanager rename-file <old-filename> <new-filename>

# example
fmanager rename-file test.js test1.ts
```

This will renames a file called `test.js` to `test1.ts` in the current directory.

7. Listing files and folders

To list files and folders in the current working directory we have two commands which are:

```shell
fmanager ls

# or

fmanager dir
```

8. Opening a file

To open a file with a default program you need to run the following command:

```shell
fmanager open <filename>

# example
fmanager open index.ts
```

The above command will open the file `index.ts` with the default program.

> make sure that the file exists in the current working directory.

9. Moving file or folders

   Folders and files can be moved around teh file system by the
   fmanager using the following command:

```shell
fmanager move <filepath to be moved> <destination path>
#             (can be absolute)        (can be relative)
```

moving files/folders using relative path example:

```shell
fmanager move package.json .
```

moving files/folders using absolute path

```shell
fmanager move  C:\Users\user\OneDrive\Documents\npm\index.js C:\Users\user\OneDrive\Documents\backend\src
```

10. copying files

To copy file is similar to the moving of a file or a folder except that this command onl copy files not folders using the following command:

```shell
fmanager copy-file <filepath to be moved> <destination path>
#             (can be absolute)        (can be relative)
```

Example:

```shell
fmanager copy-file  C:\Users\user\OneDrive\Documents\npm\index.js C:\Users\user\OneDrive\Documents\backend\src
```

11. help

To get the docs or help from the `fmanager` you run the following command:

```shell
fmanager -h
# or
fmanager --help
```

### Facing problems

If you are facing any problem using this tool feel free to create an issue so that we can improve our tool.

### Still working on

In the versions that will come we are going to allow the creation of `recursive` files and folders for example creating files and folders using the following command:

```shell
# folders
fmanager touch-file test/unit/src
```

- this will create a nested folders like:

```
- test
 - unit
    - src
```

```shell
# files
fmanager touch-file test/unit/src/user.test.js
```

- this will create a nested folder and a file at the end like:

```
- test
 - unit
    - src
       - user.test.js
```
