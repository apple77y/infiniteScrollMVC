/**
 * ImageSearchDao 생성자 정의
 * @extends nts.model.BaseDao
 * @returns {*}
 * @constructor
 */
nts.model.ImageSearchDao = function (model) {
    // 부모 DAO의 생성자를 상속
    nts.model.BaseDao.call(this);
    this._entity = model;
};

/**
 * nts.model.BaseDao의 프로토타입을 상속
 * @type {nts.model.BaseDao}
 */
nts.model.ImageSearchDao.prototype = Object.create(nts.model.BaseDao.prototype);
nts.model.ImageSearchDao.prototype.constructor = nts.model.ImageSearchDao;

/**
 * ajax 통신 호출
 * @public
 */
nts.model.ImageSearchDao.prototype.findAll = function () {
    var me = this,
        option = {
            url: 'https://s.search.naver.com/p/instant/search.naver',
            data: {
                nx_search_query: this._entity.getKeyword(),
                display: 48,
                start: this._entity.getPageNum(),
                json: 1,
                json_type: 6
            },
            jsonp: '_callback',
            dataType: 'jsonp'
        };

    me.request(option)
        .then(function (data) {
            var item = data.result.items.item;

            me._entity.setData(item);
            me._entity.setPageNum(item.length);
        });
};
