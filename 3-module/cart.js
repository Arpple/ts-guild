"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEx = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["Completed"] = 0] = "Completed";
    Status[Status["Processing"] = 1] = "Processing";
    Status[Status["Open"] = 2] = "Open";
})(Status = exports.Status || (exports.Status = {}));
// const update: StatusUpdate = {
// 	status: Status.Completed
// }
var CartEx;
(function (CartEx) {
    CartEx.potato = {
        product: 'potato',
        price: 100,
    };
    CartEx.create = (customer) => {
        return {
            customer,
            items: [],
            total: 0,
        };
    };
    const calculateTotal = (items) => {
        return items.reduce((sum, item) => sum + item.price, 0);
    };
    CartEx.addItem = (cart, item) => {
        const items = [...cart.items, item];
        return Object.assign(Object.assign({}, cart), { items, total: calculateTotal(items) });
    };
})(CartEx = exports.CartEx || (exports.CartEx = {}));
