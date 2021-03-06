import { Server } from "socket.io"

import { ExtendedSocket } from "../types"

import { registerHandshakeHandlers } from "./handshake"

// TODO: create ExtendedSocket storing user's roomID for disconnect

export function registerHandlers(io: Server) {
  io.on("connection", (socket) => {
    registerHandshakeHandlers(socket as ExtendedSocket)
  })
}
