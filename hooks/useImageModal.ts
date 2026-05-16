import { useState } from 'react'

export function useImageModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>('')

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedImage('')
  }

  return {
    isOpen,
    selectedImage,
    openModal,
    closeModal,
  }
}
