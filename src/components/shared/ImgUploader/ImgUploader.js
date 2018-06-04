import React from 'react';
import GoCloudUpload from 'react-icons/lib/go/cloud-upload';
import Dropzone from 'react-dropzone';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import './ImgUploader.scss';

const ImgUploader = ({item, onClick}) => {
  return (
    <Dropzone style={{}}>
      <div className="img-uploader">
        <div className="img-overlay">
          <DeleteBtn onClick={onClick} style={{left: '0'}} />
          <div className="upload-icon"><GoCloudUpload /></div>
        </div>
        <img src="https://picsum.photos/200/200" alt={item.name} />
      </div>
    </Dropzone>
  );
};

export default ImgUploader;