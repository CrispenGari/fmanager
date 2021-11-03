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

### Facing problems

If you are facing any problem using this tool feel free to create an issue so that we can improve our tool.
