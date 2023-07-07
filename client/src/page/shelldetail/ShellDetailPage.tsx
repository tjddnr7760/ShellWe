import ShellImgPreview from '../../component/ShellImgPreview/ShellImgPreview';
import ShellDetail from '../../component/ShellDetail/ShellDetail';
import DetailPageSidebar from '../../component/DetailPageSidebar/DetailPageSidebar';

const ShellDetailPage = () => {
  return (
    <div className="wrapper">
      <div className='left'></div>
      <div className='middle'>
        <ShellImgPreview />
        <ShellDetail />
      </div>
      <div className='right'>
        <DetailPageSidebar />
      </div>
    </div>
  );
};

export default ShellDetailPage;
