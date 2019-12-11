class  Test {

  constructor () {}

  getInfo () { // Extended information
    return {
      id :  'test' ,
      name :  'Test' , // extension name
      blocks : [ // Definition of each block
        {
          opcode :  'hello' , // When this block is executed, a function called hello is called
          blockType :  Scratch . BlockType . COMMAND ,　// Normal command block like "Move 10 steps"
          text :  'hello'  // Text displayed in the block
        }
      ]
    }
  }

  hello () {
    console . log ( 'hello' ); // Output hello to console log
  }
}

Scratch.Extensions.Register( New  Test());
