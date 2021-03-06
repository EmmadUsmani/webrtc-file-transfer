import {
  ClientID,
  SendIceCandidateToReceiverData,
  SendOfferData,
  ServerEvent,
} from "@webrtc-file-transfer/shared"

import { Server } from "../shared"

export class SendServer extends Server {
  static createRoom() {
    this.socket.emit(ServerEvent.CreateRoom)
  }

  static sendOffer(offer: RTCSessionDescriptionInit, receiverID: ClientID) {
    const data: SendOfferData = { offer, receiverID }
    this.socket.emit(ServerEvent.SendOffer, data)
  }

  static sendIceCandidate(iceCandidate: RTCIceCandidate, receiverID: ClientID) {
    const data: SendIceCandidateToReceiverData = { iceCandidate, receiverID }
    this.socket.emit(ServerEvent.SendIceCandidateToReceiver, data)
  }
}
