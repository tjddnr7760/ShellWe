import { useState, useEffect } from 'react';
import { useGetShellDetail } from '../../hooks/shelldetail/useShellsDetailId.ts';
import ShellImgPreview from '../../component/shellimgpreview/ShellImgPreview.tsx';
import ShellDetail from '../../component/ShellDetail/ShellDetail.tsx';
import DetailPageSidebar from '../../component/DetailPageSidebar/DetailPageSidebar.tsx';
import OfferModal from '../../component/OfferModal/OfferModal.tsx';
import {
  DetailPageContainer,
  Div,
  Wrapper,
  ContentDiv,
  PreviewDiv,
} from './ShellDetailPage.styled';
import { ShellDetailDataProps } from '../../dataset/ShellDetailType.ts';
import { useGetMyShellToPoke } from '../../hooks/shelldetail/useGetPokeShellsList.ts';

const ShellDetailPage = () => {
  const { data } = useGetShellDetail();
  const shellDetailData: ShellDetailDataProps = data.data;

  // 인자: recoil login 상태 memberId; 구매자의 memberId
  const { data: modaldata } = useGetMyShellToPoke(2);
  const myShellListsData = modaldata.data.shells; // 추후 타입 정의해야 함

  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  const shellStatus: string = shellDetailData.status;


  const handleOpenSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePoke = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    if (modalVisible) {
      setModalData(myShellListsData); // 모달이 열릴 때 데이터 가져오기
    }
  }, [modalVisible]);

  return (
    <Wrapper>
      <DetailPageContainer>
        <ContentDiv>
          <PreviewDiv>
            <ShellImgPreview clickedShellPictures={shellDetailData.pictures} />
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
        {modalVisible && <OfferModal myShellListsData={modalData} />}
      </DetailPageContainer>
    </Wrapper>
  );
};

export default ShellDetailPage;
