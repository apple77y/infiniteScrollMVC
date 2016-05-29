/**
 * ImageSearchEntity 생성자 정의
 * @extends nts.model.BaseEntity
 * @returns {*}
 * @constructor
 */
nts.model.ImageSearchEntity = function () {
    // 부모 모델의 생성자를 상속
    nts.model.BaseEntity.call(this);
    this._observer = new nts.helper.Observer();
    this._keyWord = '';
    this._pageNum = 1;
};

/**
 * nts.model.BaseEntity의 프로토타입을 상속
 * @type {nts.model.BaseEntity}
 */
nts.model.ImageSearchEntity.prototype = Object.create(nts.model.BaseEntity.prototype);
nts.model.ImageSearchEntity.prototype.constructor = nts.model.ImageSearchEntity;

/**
 * 옵저버 객체에 커스텀 이벤트를 등록
 * @param {string} event 커스텀 이벤트 명
 * @param {function} callback 콜백 함수
 * @public
 */
nts.model.ImageSearchEntity.prototype.addEventListener = function (event, callback) {
    this._observer.subscribe(event, callback);
};

/**
 * 옵저버 객체에 있는 커스텀 이벤트를 실행
 * @param {string} event 커스텀 이벤트 명
 * @public
 */
nts.model.ImageSearchEntity.prototype.dispatchEvent = function (event) {
    this._observer.publish(event);
};

/**
 * keyWord getter
 * @returns {*|string}
 * @public
 */
nts.model.ImageSearchEntity.prototype.getKeyword = function () {
    return this._keyWord;
};

/**
 * keyword setter
 * @param {string} keyWord 키워드
 * @public
 */
nts.model.ImageSearchEntity.prototype.setKeyword = function (keyWord) {
    this._keyWord = keyWord;
};

/**
 * pageNum getter
 * @returns {*|number}
 * @public
 */
nts.model.ImageSearchEntity.prototype.getPageNum = function () {
    return this._pageNum;
};

/**
 * pageNum setter
 * @param {number} pageNum 페이지
 * @public
 */
nts.model.ImageSearchEntity.prototype.setPageNum = function (pageNum) {
    this._pageNum += pageNum;
};
