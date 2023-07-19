import styled from 'styled-components';

export const UploadedImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const UploadedImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;
export const Container = styled.div`
  overflow: hidden overlay;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const DropzoneWrapper = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const UploadZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  height: 320px;
  border: 2px solid #82c0fa;
  white-space: nowrap;
`;

export const UploadExplanation = styled.div`
  background-color: #f5fdff;
  border-radius: 25px;
  white-space: nowrap;

  padding: 10px 70px;
  border: 2px solid #82c0fa;
`;
