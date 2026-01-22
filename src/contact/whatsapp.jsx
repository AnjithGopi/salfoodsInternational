export const whatsappChat = {
  message: "Hello ! I would like to know more",
  contactNumber: "917994493684",
};

export const whatsappURL = `https://wa.me/${whatsappChat.contactNumber}?text=${encodeURIComponent(whatsappChat.message)}`;
