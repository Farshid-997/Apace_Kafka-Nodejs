const { kafka } = require("./client");
const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({groupId:group});

 await consumer.subscribe({topics:["rider-updates"], fromBeginning:true})
  consumer.connect();
 

  await consumer.run({
    eachMessage: async ({ topic, partition, message}) => {
        console.log(
            `${group}: [${topic}]: PART:${partition}:`,
            message.value.toString()
          );
    },
})

 

 
  
}

init()