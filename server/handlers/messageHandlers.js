const { nanoid } = require('nanoid')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.socket/messages.json')
const db = low(adapter)

// db.defaults({
//   roomId: [
//
//   ]
// }).write()

module.exports = (io, socket, nameRoom) => {

  db.defaults({
    [nameRoom]: [
    ]
  }).write()



  const getMessages = () => {
    const messages = db.get(nameRoom).value()
    io.in(socket.roomId).emit('messages', messages)
  }

  const addMessage = (message) => {
    db.get(nameRoom)
      .push({
        messageId: nanoid(8),
        createdAt: new Date(),
        ...message
      })
      .write()

    getMessages()
  }

  const removeMessage = ( messageId) => {
    db.get(nameRoom).remove({ messageId }).write()

    getMessages()
  }

  socket.on(`message:get`, getMessages)
  socket.on(`message:add`, addMessage)
  socket.on(`message:remove`, removeMessage)
}
