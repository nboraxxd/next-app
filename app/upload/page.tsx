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
        options={{
          sources: ['local'],
          multiple: false,
          styles: {
            palette: {
              window: '#ffffff',
              sourceBg: '#f4f4f5',
              windowBorder: '#90a0b3',
              tabIcon: '#000000',
              inactiveTabIcon: '#555a5f',
              menuIcons: '#555a5f',
              link: '#0433ff',
              action: '#339933',
              inProgress: '#0433ff',
              complete: '#339933',
              error: '#cc0000',
              textDark: '#000000',
              textLight: '#fcfffd',
            },
          },
        }}
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
