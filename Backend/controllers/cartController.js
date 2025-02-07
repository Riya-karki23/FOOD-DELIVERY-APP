import userModel from '../models/userModel.js';

// ------------------------------------------------------------------------------- Add to Cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Check if user exists
    let userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {}; // Ensure cartData is always an object
    const itemKey = String(itemId); // Convert itemId to string to avoid key mismatches

    cartData[itemKey] = (cartData[itemKey] || 0) + 1; // Increment item count

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added to cart", cartData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding to cart" });
  }
};

// ------------------------------------------------------------------------------- Remove from Cart
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    let userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};
    const itemKey = String(itemId);

    if (cartData[itemKey] && cartData[itemKey] > 0) {
      cartData[itemKey] -= 1;

      // Remove item from cart if quantity reaches 0
      if (cartData[itemKey] === 0) {
        delete cartData[itemKey];
      }

      await userModel.findByIdAndUpdate(userId, { cartData });
      return res.json({ success: true, message: "Removed from cart", cartData });
    } 

    res.status(400).json({ success: false, message: "Item not found in cart" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error removing from cart" });
  }
};

// ------------------------------------------------------------------------------- Get Cart Items
const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    let userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found", cartData: {} });
    }

    let cartData = userData.cartData || {}; // Ensure cartData is always an object

    res.json({ success: true, cartData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error retrieving cart" });
  }
};

export { addToCart, removeFromCart, getCart };
