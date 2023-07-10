import React from 'react';
import {
  MainShellWrapper,
  MainShellImg,
  ShellListContainer,
  ShellBox,
} from './MainPage.styled';
import LiftBtn from '../../common/liftbtn/LiftBtn.tsx';
import MainShell from '../../asset/mainshell.svg';
import Shell from '../../common/shell/Shell.tsx';

const MainPage: React.FC = () => {
  return (
    <MainShellWrapper>
      <div>
        <MainShellImg src={MainShell} alt="mainshell"></MainShellImg>
      </div>
      <ShellListContainer>
        <ShellBox>
          <Shell />
          <Shell />
          <Shell />
          <Shell />
        </ShellBox>
        <ShellBox>
          <Shell />
          <Shell />
          <Shell />
          <Shell />
        </ShellBox>
        <LiftBtn />
      </ShellListContainer>
    </MainShellWrapper>
=======
import React, { useState } from 'react';
import ShellImgPreview from '../../component/ShellImgPreview/ShellImgPreview';
import ShellDetail from '../../component/ShellDetail/ShellDetail';
import DetailPageSidebar from '../../component/DetailPageSidebar/DetailPageSidebar';
import OfferModal from '../../component/OfferModal/OfferModal';
import {
  DetailPageContainer,
  Div,
  Wrapper,
  ContentDiv,
  PreviewDiv,
} from './MainPage.styled';

const MainPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            />
            {sidebarOpen && <DetailPageSidebar />}
          </Div>
        </ContentDiv>
        {modalVisible && <OfferModal />}
      </DetailPageContainer>
    </Wrapper>
  );
};

export default MainPage;
