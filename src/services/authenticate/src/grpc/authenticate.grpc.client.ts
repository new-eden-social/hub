import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IAuthenticateGrpcService } from './authenticate.grpc.interface';
import { AuthenticateGrpcClientOptions } from './authenticate.grpc.client.options';

@Injectable()
export class AuthenticateGrpcClient implements OnModuleInit {

  @Client(AuthenticateGrpcClientOptions)
  private readonly client: ClientGrpc;
  public service: IAuthenticateGrpcService;

  onModuleInit() {
    this.service = this.client.getService<IAuthenticateGrpcService>('AuthenticateService');
  }
}
