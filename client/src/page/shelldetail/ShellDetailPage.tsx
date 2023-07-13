import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useGetShellDetail } from '../../hooks/shelldetail/useShellsDetailId.ts';
import ShellImgPreview from '../../component/shellimgpreview/ShellImgPreview';
import ShellDetail from '../../component/shelldetail/ShellDetail';
import DetailPageSidebar from '../../component/detailpagesidebar/DetailPageSidebar';
import OfferModal from '../../component/offermodal/OfferModal';
import {
  DetailPageContainer,
  Div,
  Wrapper,
  ContentDiv,
  PreviewDiv,
} from './ShellDetailPage.styled';

const ShellDetailPage = () => {
  // const { id } = useParams; 추후에 id를 useGetShellDetail의 인자로 넣어주기.
  const { data } = useGetShellDetail(4);
  const shellDetailData = data.data;
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const shellStatus: string = shellDetailData.status;

  const handleOpenSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePoke = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Wrapper>
      <DetailPageContainer>
        <ContentDiv className="middle">
          <PreviewDiv>
            <ShellImgPreview />
          </PreviewDiv>
          <Div>
            <ShellDetail
              handlePoke={handlePoke}
              handleOpenSidebar={handleOpenSidebar}
              shellDetailData={shellDetailData}
            />
            {sidebarOpen && <DetailPageSidebar shellStatus={shellStatus} />}
          </Div>
        </ContentDiv>
        {modalVisible && <OfferModal />}
      </DetailPageContainer>
    </Wrapper>
  );
};

export default ShellDetailPage;
// 현재 페이지의 id는 2개가 존재할 수 있다.
// shellid, memberId
// shell 페이지에서 useParams를 사용하면, shell의 Id이다.
// 하지만, 모달창의 경우에는 shell의 id를 사용하는게 아니라,
// 구매자의 입장인 내가 가진 Shell의 정보를 불러오는 것이다.
// 따라서, 로그인된 memberId를 입력해야 한다.
