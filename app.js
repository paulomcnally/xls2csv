// dependencies
// http://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
// http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback
var exec = require('child_process').exec;
var fs = require('fs');

// command execute in shell
var command = 'java -jar jxl.jar -csv example.xls';

child = exec(command,
  function (error, stdout, stderr) {
    // nodejs error
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    else {
      // save stdout to csv file
      fs.writeFile('example.csv', stdout, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('Saved!');
        }
      });
    }
  });
