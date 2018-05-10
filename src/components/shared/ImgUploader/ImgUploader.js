import React from 'react';
import IoIosCloudUploadOutline from 'react-icons/lib/io/ios-cloud-upload-outline';
import Dropzone from 'react-dropzone';
import './ImgUploader.scss';

const ImgUploader = ({item}) => {
    return (
      <Dropzone style={{}}>
        <div className="img-uploader">
          <div className="img-overlay">
            <div className="upload-icon"><IoIosCloudUploadOutline /></div>
          </div>
          <img src="https://picsum.photos/200/200" alt={item.name} />
        </div>
      </Dropzone>
    );
};

export default ImgUploader;