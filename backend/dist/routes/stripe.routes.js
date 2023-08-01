"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("stripe"));
const express_1 = __importDefault(require("express"));
const STRIPE_KEY = process.env.STRIPE_API_KEY || '';
const stripe = new stripe_1.default(STRIPE_KEY, {
    apiVersion: '2022-11-15'
});
const URL = process.env.FRONTEND_URL;
const router = express_1.default.Router();
router.post('/create-checkout-session', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const line_items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title,
                    description: item.description,
                    metadata: {
                        id: item._id
                    }
                },
                unit_amount: item.price * 100,
            },
            quantity: item.cartQuantity
        };
    });
    const session = yield stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${URL}/success`,
        cancel_url: `${URL}/cart`,
    });
    if (session) {
        res.status(200).json({
            success: true,
            data: session.url
        });
    }
}));
exports.default = router;
//# sourceMappingURL=stripe.routes.js.map