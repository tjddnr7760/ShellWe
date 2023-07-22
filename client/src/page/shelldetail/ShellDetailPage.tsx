import { useState } from 'react';
import { useGetShellDetail } from '../../hooks/shelldetail/useShellsDetailId.ts';
import ShellImgPreview from '../../component/ShellImgPreview/ShellImgPreview.tsx';
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
import { useGetMyShellToPoke } from '../../hooks/shelldetail/useGetPokeShellsList.ts';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData.ts';

const ShellDetailPage = () => {
  const { data } = useGetShellDetail();

  const memberId = Number(getMemberIdFromLocalStorage());
  const { data: modaldata } = useGetMyShellToPoke(memberId);

  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePoke = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {data && (
        <Wrapper>
          <DetailPageContainer>
            <ContentDiv>
              <PreviewDiv>
                {data.data && (
                  <ShellImgPreview clickedShellPictures={data.data.pictures} />
                )}
              </PreviewDiv>
              <Div>
                {data.data && (
                  <ShellDetail
                    handlePoke={handlePoke}
                    handleOpenSidebar={handleOpenSidebar}
                    shellDetailData={data.data}
                  />
                )}
                {sidebarOpen && (
                  <DetailPageSidebar shellStatus={data.data.status} />
                )}
              </Div>
            </ContentDiv>
            {modalVisible && (
              <OfferModal
                modaldata={modaldata}
                shellMemberId={data.data.member.id}
                handlePoke={handlePoke}
              />
            )}
          </DetailPageContainer>
        </Wrapper>
      )}
    </>
  );
};

export default ShellDetailPage;
