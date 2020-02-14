const fs = require('fs');
const nanoid = require('nanoid');



const readFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const writeFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  })
};

const filename = './threads.json';
let data = [];

module.exports = {
  async init(){
    try{
      const filePublications = await readFile(filename);
      data =  JSON.parse(filePublications.toString());
    }catch (e) {
      console.log('Could not read file ');
      data = [];
    }

  },

  async getThreads(){
    return data;
  },

  async addThread(thread){
    const date = new Date();
    thread.id = nanoid();
    thread.date = date;
    data.unshift(thread);
    await this.save()
  },
  async save(){
    const filePublication = JSON.stringify(data, null , 2);
    await writeFile(filename, filePublication);
  }
};