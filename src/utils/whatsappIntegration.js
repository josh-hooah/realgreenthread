// WhatsApp Integration Utility
const WHATSAPP_CONTACT = "+234 905 881 0096";
const WHATSAPP_NUMBER = "234905881096"; // Format without spaces for WhatsApp API

export const sendToWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export const formatBookingMessage = (bookingDetails) => {
  const { clothType, description, deliveryDate, deliveryTime, fullName, phone, email } = bookingDetails;
  
  return `🧵 *CUSTOM CLOTH BOOKING REQUEST*

*Customer Details:*
Name: ${fullName}
Phone: ${phone}
Email: ${email}

*Booking Details:*
Cloth Type: ${clothType}
Description: ${description}
Delivery Date: ${deliveryDate}
Delivery Time: ${deliveryTime}

Please confirm receipt of this booking request.`;
};

export const formatOrderMessage = (orderDetails) => {
  const { productName, price, quantity, size, color, fullName, phone, email } = orderDetails;
  
  return `📦 *PRODUCT ORDER REQUEST*

*Customer Details:*
Name: ${fullName}
Phone: ${phone}
Email: ${email}

*Order Details:*
Product: ${productName}
Price: ₦${price}
Quantity: ${quantity}
Size: ${size || "N/A"}
Color: ${color || "N/A"}
Total: ₦${price * quantity}

Please confirm this order.`;
};

export const formatCartMessage = (cartItems, totalPrice) => {
  let message = `🛍️ *SHOPPING CART ORDER*\n\n*Items:*\n`;
  
  cartItems.forEach((item, index) => {
    message += `\n${index + 1}. ${item.name}\n   Qty: ${item.quantity} × ₦${item.price} = ₦${item.quantity * item.price}`;
  });
  
  message += `\n\n*Total: ₦${totalPrice}*\n\nPlease confirm this order.`;
  
  return message;
};
