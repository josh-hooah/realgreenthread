# GREENTHREAD - Quick Reference Guide

## 🚀 Start/Stop the Application

**Start Development Server:**
```bash
cd c:\Users\joshh\Desktop\sozoComp\greenthread
npm start
```

**Current Access:** http://localhost:3002

**Stop Server:** Press `Ctrl + C` in the terminal

---

## 🛠️ Common Tasks

### **Add a New Product**

1. Open `src/data/products.js`
2. Add to the appropriate array (menswear, shoes, or accessories):
```javascript
{
  id: "unique-id",
  category: "senator wear",
  name: "Product Name",
  price: 25000,
  image: "https://image-url.com/image.jpg",
  description: "Product description here",
  colors: ["Black", "Navy", "Gold"],
  sizes: ["S", "M", "L", "XL", "XXL"]
}
```

### **Change WhatsApp Contact**

1. Open `src/utils/whatsappIntegration.js`
2. Update the phone number:
```javascript
const WHATSAPP_NUMBER = "234905881096"; // Change this number
```

### **Update Theme Colors**

Edit `src/App.css` and `src/index.css`:
```css
:root {
  --primary-black: #1a1a1a;    /* Change primary color */
  --primary-gold: #d4af37;     /* Change accent color */
  --primary-white: #ffffff;    /* Change secondary color */
}
```

### **Update Contact Information**

Edit `src/components/Footer.js` and `src/pages/HomePage.js` to change contact details.

### **Add New Product Category**

1. Add to `src/data/products.js` categories array
2. Add products to appropriate category
3. The catalog will auto-update

---

## 📱 Feature Guide

### **Shopping Cart**
- Items automatically persist during session
- Clear cart by going to home page and back
- Quantities can be updated in cart
- Colors and sizes are saved with items

### **WhatsApp Booking**
- Click "Custom Order" → Fill form → "Send to WhatsApp"
- Form validates all required fields
- Message auto-formats with customer info
- Requires WhatsApp installed on device

### **Checkout**
- Review all items before sending
- Delivery address is required
- Payment method options provided
- Order details sent to WhatsApp

---

## 🎨 File Structure Quick Reference

| File | Purpose |
|------|---------|
| `src/pages/HomePage.js` | Landing page with hero and sections |
| `src/pages/ProductCatalog.js` | Product listing, filtering, sorting |
| `src/pages/ProductDetail.js` | Individual product with options |
| `src/pages/CustomBooking.js` | Custom cloth booking form |
| `src/pages/Cart.js` | Shopping cart management |
| `src/pages/Checkout.js` | Order checkout |
| `src/components/Navigation.js` | Top navigation bar |
| `src/components/Footer.js` | Footer with contact info |
| `src/data/products.js` | All product data |
| `src/utils/whatsappIntegration.js` | WhatsApp integration |

---

## 🔍 Testing Checklist

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Product catalog displays all items
- [ ] Filtering by category works
- [ ] Sorting by price works
- [ ] Product details page loads correctly
- [ ] Add to cart functionality works
- [ ] Cart displays items correctly
- [ ] Custom booking form validates
- [ ] WhatsApp links work
- [ ] Checkout page works
- [ ] Responsive on mobile
- [ ] All buttons have hover effects

---

## 📊 Performance Tips

1. **Optimize Product Images:**
   - Use smaller image files
   - Compress images before upload
   - Use modern formats (WebP)

2. **Improve Load Time:**
   - Minimize CSS files
   - Lazy load images
   - Use CDN for static assets

3. **Monitor Performance:**
   ```bash
   npm run build
   npm install -g serve
   serve -s build
   ```

---

## 🐛 Common Issues & Solutions

### **Port 3000/3002 Already in Use**
```bash
npm start -- --port 3003
# Or kill the process using that port
```

### **Module Not Found Error**
```bash
npm install
npm start
```

### **Styling Not Applying**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart development server
- Check CSS file paths

### **WhatsApp Links Not Working**
- WhatsApp must be installed on device
- Check phone number format
- Ensure number includes country code

### **Cart Not Persisting**
- Cart is session-only by design
- To add persistence: Use localStorage
- See `src/App.js` for implementation

---

## 📈 Scaling the Website

### **Short Term:**
- Add more products
- Enhance product images
- Add product search
- Implement user reviews

### **Medium Term:**
- Add user authentication
- Create order history
- Email notifications
- Admin dashboard

### **Long Term:**
- Payment gateway integration
- Inventory management
- Analytics dashboard
- Mobile app

---

## 💰 Pricing Strategy

**Current Product Pricing (Nigerian Naira):**
- Low: ₦3,500 - ₦10,000 (Accessories)
- Mid: ₦12,000 - ₦28,000 (Clothes, Shoes)
- Premium: ₦35,000+ (Suits)

**Suggested Margins:**
- Accessories: 40-50%
- Clothing: 50-70%
- Premium Items: 60-80%

---

## 📞 Support & Contact

**Customer Contact:** +234 905 881 0096 (WhatsApp)

**Operating Hours:** 9:00 AM - 9:00 PM (Monday - Sunday)

---

## 🚀 Deployment Guide

### **To Production (Firebase):**

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init
firebase deploy
```

### **To Vercel:**

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### **To Netlify:**

1. Build the app:
```bash
npm run build
```

2. Drag `build` folder to Netlify

---

## 📋 Maintenance Checklist

**Daily:**
- Monitor WhatsApp for orders
- Respond to inquiries

**Weekly:**
- Check inventory levels
- Review sales data
- Update product availability

**Monthly:**
- Analyze customer feedback
- Update pricing if needed
- Review analytics
- Add new products

---

## 🎓 Learning Resources

- React Docs: https://react.dev
- React Router: https://reactrouter.com
- WhatsApp API: https://developers.facebook.com/docs/whatsapp
- CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS

---

## ✅ Success Metrics to Track

- Number of products browsed
- Cart abandonment rate
- Custom booking requests
- Order conversion rate
- Customer inquiry response time
- Average order value
- Mobile vs desktop traffic

---

## 🎉 You're All Set!

Your GREENTHREAD website is fully functional and ready for customers!

**Quick Start:**
```bash
npm start
```

**Access:** http://localhost:3002

---

**For updates, enhancements, or troubleshooting, refer to the detailed README.md file.**
