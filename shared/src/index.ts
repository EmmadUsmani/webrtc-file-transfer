export const enum ServerEvent {
  CreateRoom = "from_sender:handshake:create_room",
  RoomCreated = "to_sender:handshake:room_created",
  JoinRoom = "from_receiver:handshake:join_room",
  ReceiverJoined = "to_sender:handshake:receiver_joined",
}

export type RoomCreatedData = {
  roomID: RoomID
}

export type JoinRoomData = {
  roomID: RoomID
}

export type ReceiverJoinedData = {
  receiverID: ClientID
}

export type ClientID = string

export type RoomID = string

export type Room = {
  roomID: RoomID
  sender: ClientID
  receivers: Array<ClientID>
}
