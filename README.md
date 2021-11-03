### fmanager

This is a command line application that will help you to manage files and folders using the `cmd`. With this tool you can be able to do a lot of files and folder manipulations like:

1. creating a file
2. creating a folder
3. deleting a file
4. deleting a folder
5. renaming a file
6. rename a folder
7. etc

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
