class stock{
/**
 * @param {string} sharename,
 * @param {number} numberofshare
 * @param {number} shareprice
 */

    constructor(sharename, numberofshare, shareprice)
    {
        this.sharename=sharename
        this.numberofshare=numberofshare
        this.shareprice=shareprice
    }
    /**
     * return the value of stock
     */
    valueOfStock()
    {
        return  this.numberofshare*this.shareprice
    }
}
module.exports={
        stock
}