const path = require('path');
const fs = require('fs');
const { couldStartTrivia } = require('typescript');

function createSymLink(source, dest) {
  // console.log(dest)
  // console.log(source)
  fs.symlink(
    source,
    dest,
   function (err) { console.log(err || "Done."); }
  );

  fs.del
}

console.log(process.env.NODE_ENV)

function linkDirectories() {
  let source = path.resolve(__dirname + "/../kook_server/packages")
  let sourceModule = path.resolve(__dirname + "/../kook_server/modules")

  if(process.env.NODE_ENV=='production') {
    console.log('Linking Productin Builds')
    source = path.resolve(__dirname + "/../kook_server/dist/packages")
    sourceModule = path.resolve(__dirname + "/../kook_server/dist/modules")
  } else {
    console.log('Linking Development Module')
  }

  const dest = path.resolve(__dirname + "/node_modules/@kookjs")
  const destModule = path.resolve(__dirname + "/node_modules/@khanakiajs")

  try {
    fs.unlinkSync(dest);
    console.log('successfully unliked '+ dest);
  } catch (err) {
    // console.log(err)
  }

  try {
    fs.unlinkSync(destModule);
    console.log('successfully unlinked ' + dest);
  } catch (err) {
    // console.log(err)
  }
  
  createSymLink(source, dest);
  console.log('Created new symlink ' + dest)

  createSymLink(sourceModule, destModule);
  console.log('Created new symlink ' + destModule)
}


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const message = `=========== WARNING DANGEROUS COMMAND ================ \n
This command can lead to delete your actual directories while creating symlink. \n
So please first backup your directories. \n`
console.log(message)

rl.question("Are you sure have you backuped your directories ? y|n ", function(name) {
    if(name=='y') {
      linkDirectories();
    }
    rl.close();
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});