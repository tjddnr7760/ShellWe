import { useState, useEffect } from 'react';
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
import { ShellDetailDataProps } from '../../dataset/ShellDetailType.ts';
import { useGetMyShellToPoke } from '../../hooks/shelldetail/useGetPokeShellsList.ts';

const ShellDetailPage = () => {
  // 인자: const { id } = useParams; 판매자의 shellId
  const { data } = useGetShellDetail(3);
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
        {modalVisible && <OfferModal myShellListsData={modalData} />}
      </DetailPageContainer>
    </Wrapper>
  );
};

export default ShellDetailPage;
