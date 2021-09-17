import { RoomCreatedData, ServerEvent } from "@webrtc-file-transfer/shared"

import { Rooms } from "../../rooms" // TODO (refactor): configure baseUrl
import { ExtendedSocket } from "../../types"
import { registerHandler } from "../../utils"

export function registerSenderHandlers(socket: ExtendedSocket) {
  registerHandler(socket, ServerEvent.CreateRoom, () => {
    const roomID = Rooms.createRoom(socket)

    // emit response event to sender
    const resData: RoomCreatedData = { roomID }
    socket.emit(ServerEvent.RoomCreated, resData)
  })

  registerHandler(socket, "disconnect", () => {
    const roomID = socket.roomID

    // notify all receivers
    socket.to(roomID).emit(ServerEvent.SenderLeft)

    Rooms.senderLeave(socket)
  })
}
