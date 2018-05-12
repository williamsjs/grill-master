import React from 'react';
import GoCloudUpload from 'react-icons/lib/go/cloud-upload';
import Dropzone from 'react-dropzone';
import './ImgUploader.scss';

const ImgUploader = ({item}) => {
    return (
      <Dropzone style={{}}>
        <div className="img-uploader">
          <div className="img-overlay">
            <div className="upload-icon"><GoCloudUpload /></div>
          </div>
          <img src="https://picsum.photos/200/200" alt={item.name} />
        </div>
      </Dropzone>
    );
};

export default ImgUploader;