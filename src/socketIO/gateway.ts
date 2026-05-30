import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class InventarioGateway {

    @WebSocketServer()
    server: Server;

    emitirCambio(producto: any) {
        this.server.emit('inventarioActualizado', producto);
    }
}