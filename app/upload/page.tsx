'use client'

import { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

type CloudinaryInfo = {
  public_id: string
}

export default function UploadPage() {
  const [publicId, setPublicId] = useState('')

  return (
    <>
      {publicId && <CldImage src={publicId} alt="Image" height={180} width={180} style={{ objectFit: 'cover' }} />}
      <CldUploadWidget
        uploadPreset="ckm8wxoq"
        onUpload={(result, _widget) => {
          if (result.event === 'success') {
            setPublicId((result.info as CloudinaryInfo).public_id)
          }
        }}
      >
        {({ open }) => (
          <button className="btn btn-secondary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  )
}
