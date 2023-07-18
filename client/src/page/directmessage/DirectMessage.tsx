import {
  MessageWrapper,
  MessageListContainer,
  MessageListHeader,
  MessageMyInfo,
  MessageListItem,
  MessageListUserInfo,
  MessageUserNickName,
  MessageUserLastText,
} from './DirectMessage.styled';

import Avatar from '../../common/avatar/Avatar';
import { DMRoom } from '../../component/DMroom/DMroom';

export const DirectMessage: React.FC = () => {
  return (
    <>
      <MessageWrapper>
        <MessageListContainer>
          <MessageListHeader>
            <MessageMyInfo>정찬영</MessageMyInfo>
            ChatList
          </MessageListHeader>
          <MessageListItem>
            <Avatar avatartype={'UserImg'} member={undefined} />
            <MessageListUserInfo>
              <MessageUserNickName>NickName</MessageUserNickName>
              <MessageUserLastText>UseText</MessageUserLastText>
            </MessageListUserInfo>
          </MessageListItem>

          {/* <MessageListItem>
            <Avatar avatartype={'UserImg'} member={undefined} />
            <MessageListUserInfo>
              <MessageUserNickName>NickName</MessageUserNickName>
              <MessageUserLastText>
                UsessssssssssssrLddddddddddddddddddddddastTextdd
              </MessageUserLastText>
            </MessageListUserInfo>
          </MessageListItem> */}
        </MessageListContainer>
        <DMRoom />
      </MessageWrapper>
    </>
  );
};

export default DirectMessage;
