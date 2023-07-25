import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
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
import { userStateWithExpiry } from '../../recoil/selector';

const ShellDetailPage = () => {
  const { data: shellDetailData } = useGetShellDetail();
  const isLogIn = useRecoilValue(userStateWithExpiry);
  const memberId = Number(getMemberIdFromLocalStorage());
  const { data: modaldata } = useGetMyShellToPoke(memberId);

  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const handleOpenSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePoke = () => {
    if (isLogIn) {
      setModalVisible(!modalVisible);
    } else {
      alert('로그인 후 이용 가능합니다.');
      navigate('/auth/login');
    }
  };

  return (
    <>
      {shellDetailData && (
        <Wrapper>
          <DetailPageContainer>
            <ContentDiv>
              <PreviewDiv>
                {shellDetailData.data && (
                  <ShellImgPreview
                    clickedShellPictures={shellDetailData.data.pictures}
                  />
                )}
              </PreviewDiv>
              <Div>
                {shellDetailData.data && (
                  <ShellDetail
                    handlePoke={handlePoke}
                    handleOpenSidebar={handleOpenSidebar}
                    shellDetailData={shellDetailData.data}
                  />
                )}
                {sidebarOpen && (
                  <DetailPageSidebar
                    shellStatus={shellDetailData?.data?.status}
                    handleOpenSidebar={handleOpenSidebar}
                  />
                )}
              </Div>
            </ContentDiv>
            {modalVisible && (
              <OfferModal
                modaldata={modaldata}
                shellMemberId={shellDetailData.data.member.id}
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
