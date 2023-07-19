import React, { useState } from 'react';
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

export default ShellDetailPage;
