import { Test, TestingModule } from '@nestjs/testing';
import { FriendlinkController } from './friendlink.controller';

describe('FriendlinkController', () => {
  let controller: FriendlinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FriendlinkController],
    }).compile();

    controller = module.get<FriendlinkController>(FriendlinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
