self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/UploadImage.module.css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/UploadImage.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UploadImage_container__3H0-D {\r\n  width: 100%;\r\n  background: #fff;\r\n  position: relative;\r\n  /* padding: 2em 0; */\r\n  display: flex;\r\n  margin: 0 auto;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* box-shadow: 0 0 0 1px rgba(255,255,255,.05), inset 0 0 .25em 0 rgba(0,0,0,.25); */\r\n}\r\n\r\n.UploadImage_droparea__2VuSk {\r\n  width: 100%;\r\n  padding: 2em;\r\n  border: 0.15em dotted grey;\r\n  text-align: center;\r\n  border-radius: 0.5em;\r\n  color: rgb(56, 56, 56);\r\n  z-index: 20;\r\n  transition: all 0.3s ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.UploadImage_buttons__j12Rh {\r\n  display: flex;\r\n  grid-column-gap: 1em;\r\n  -moz-column-gap: 1em;\r\n       column-gap: 1em;\r\n}\r\n\r\n.UploadImage_btn__clear__ibGTu {\r\n  background-color: rgb(199, 97, 97);\r\n}\r\n\r\n.UploadImage_btn__upload__Y4FVL {\r\n  background-color: rgb(23, 109, 90);\r\n}\r\n\r\n.UploadImage_img__preview__2qPEI {\r\n  width: 90%;\r\n  border: 0.1em solid grey;\r\n}\r\n/* \r\n.img__preview span {\r\n  font-size: 14px;\r\n} */\r\n\r\n.UploadImage_file__metadata__37RiG {\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  padding: 10px;\r\n  border-radius: 6px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/UploadImage.module.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oFAAoF;AACtF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,oBAAoB;EACpB,sBAAsB;EACtB,WAAW;EACX,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,oBAAe;EAAf,oBAAe;OAAf,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,UAAU;EACV,wBAAwB;AAC1B;AACA;;;GAGG;;AAEH;EACE,sBAAsB;EACtB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":[".container {\r\n  width: 100%;\r\n  background: #fff;\r\n  position: relative;\r\n  /* padding: 2em 0; */\r\n  display: flex;\r\n  margin: 0 auto;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* box-shadow: 0 0 0 1px rgba(255,255,255,.05), inset 0 0 .25em 0 rgba(0,0,0,.25); */\r\n}\r\n\r\n.droparea {\r\n  width: 100%;\r\n  padding: 2em;\r\n  border: 0.15em dotted grey;\r\n  text-align: center;\r\n  border-radius: 0.5em;\r\n  color: rgb(56, 56, 56);\r\n  z-index: 20;\r\n  transition: all 0.3s ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  column-gap: 1em;\r\n}\r\n\r\n.btn__clear {\r\n  background-color: rgb(199, 97, 97);\r\n}\r\n\r\n.btn__upload {\r\n  background-color: rgb(23, 109, 90);\r\n}\r\n\r\n.img__preview {\r\n  width: 90%;\r\n  border: 0.1em solid grey;\r\n}\r\n/* \r\n.img__preview span {\r\n  font-size: 14px;\r\n} */\r\n\r\n.file__metadata {\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  padding: 10px;\r\n  border-radius: 6px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "UploadImage_container__3H0-D",
	"droparea": "UploadImage_droparea__2VuSk",
	"buttons": "UploadImage_buttons__j12Rh",
	"btn__clear": "UploadImage_btn__clear__ibGTu",
	"btn__upload": "UploadImage_btn__upload__Y4FVL",
	"img__preview": "UploadImage_img__preview__2qPEI",
	"file__metadata": "UploadImage_file__metadata__37RiG"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjQ4YzRjNWI0YjhhN2QyYzk5MDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSx5RUFBeUUsa0JBQWtCLHVCQUF1Qix5QkFBeUIseUJBQXlCLHNCQUFzQixxQkFBcUIsNkJBQTZCLDBCQUEwQiw4QkFBOEIseUZBQXlGLE9BQU8sc0NBQXNDLGtCQUFrQixtQkFBbUIsaUNBQWlDLHlCQUF5QiwyQkFBMkIsNkJBQTZCLGtCQUFrQixvQ0FBb0Msc0JBQXNCLEtBQUsscUNBQXFDLG9CQUFvQiwyQkFBMkIsMkJBQTJCLDJCQUEyQixLQUFLLHdDQUF3Qyx5Q0FBeUMsS0FBSyx5Q0FBeUMseUNBQXlDLEtBQUssMENBQTBDLGlCQUFpQiwrQkFBK0IsS0FBSywrQkFBK0Isc0JBQXNCLE1BQU0sOENBQThDLDZCQUE2Qix5QkFBeUIsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLG9CQUFvQix5QkFBeUIsbUJBQW1CLHdCQUF3QixLQUFLLFdBQVcsOEZBQThGLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLHNDQUFzQyxrQkFBa0IsdUJBQXVCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHFCQUFxQiw2QkFBNkIsMEJBQTBCLDhCQUE4Qix5RkFBeUYsT0FBTyxtQkFBbUIsa0JBQWtCLG1CQUFtQixpQ0FBaUMseUJBQXlCLDJCQUEyQiw2QkFBNkIsa0JBQWtCLG9DQUFvQyxzQkFBc0IsS0FBSyxrQkFBa0Isb0JBQW9CLHNCQUFzQixLQUFLLHFCQUFxQix5Q0FBeUMsS0FBSyxzQkFBc0IseUNBQXlDLEtBQUssdUJBQXVCLGlCQUFpQiwrQkFBK0IsS0FBSywrQkFBK0Isc0JBQXNCLE1BQU0sMkJBQTJCLDZCQUE2Qix5QkFBeUIsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLG9CQUFvQix5QkFBeUIsbUJBQW1CLHdCQUF3QixLQUFLLHVCQUF1QjtBQUNsbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvVXBsb2FkSW1hZ2UubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVXBsb2FkSW1hZ2VfY29udGFpbmVyX18zSDAtRCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAvKiBwYWRkaW5nOiAyZW0gMDsgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAvKiBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMDUpLCBpbnNldCAwIDAgLjI1ZW0gMCByZ2JhKDAsMCwwLC4yNSk7ICovXFxyXFxufVxcclxcblxcclxcbi5VcGxvYWRJbWFnZV9kcm9wYXJlYV9fMlZ1U2sge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBib3JkZXI6IDAuMTVlbSBkb3R0ZWQgZ3JleTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5VcGxvYWRJbWFnZV9idXR0b25zX19qMTJSaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XFxyXFxuICAtbW96LWNvbHVtbi1nYXA6IDFlbTtcXHJcXG4gICAgICAgY29sdW1uLWdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uVXBsb2FkSW1hZ2VfYnRuX19jbGVhcl9faWJHVHUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgOTcsIDk3KTtcXHJcXG59XFxyXFxuXFxyXFxuLlVwbG9hZEltYWdlX2J0bl9fdXBsb2FkX19ZNEZWTCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDEwOSwgOTApO1xcclxcbn1cXHJcXG5cXHJcXG4uVXBsb2FkSW1hZ2VfaW1nX19wcmV2aWV3X18ycVBFSSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG4vKiBcXHJcXG4uaW1nX19wcmV2aWV3IHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uVXBsb2FkSW1hZ2VfZmlsZV9fbWV0YWRhdGFfXzM3UmlHIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvVXBsb2FkSW1hZ2UubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9GQUFvRjtBQUN0Rjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBZTtFQUFmLG9CQUFlO09BQWYsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7QUFDQTs7O0dBR0c7O0FBRUg7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAvKiBwYWRkaW5nOiAyZW0gMDsgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAvKiBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMDUpLCBpbnNldCAwIDAgLjI1ZW0gMCByZ2JhKDAsMCwwLC4yNSk7ICovXFxyXFxufVxcclxcblxcclxcbi5kcm9wYXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGJvcmRlcjogMC4xNWVtIGRvdHRlZCBncmV5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBjb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fY2xlYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgOTcsIDk3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdXBsb2FkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMTA5LCA5MCk7XFxyXFxufVxcclxcblxcclxcbi5pbWdfX3ByZXZpZXcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogMC4xZW0gc29saWQgZ3JleTtcXHJcXG59XFxyXFxuLyogXFxyXFxuLmltZ19fcHJldmlldyBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmZpbGVfX21ldGFkYXRhIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlVwbG9hZEltYWdlX2NvbnRhaW5lcl9fM0gwLURcIixcblx0XCJkcm9wYXJlYVwiOiBcIlVwbG9hZEltYWdlX2Ryb3BhcmVhX18yVnVTa1wiLFxuXHRcImJ1dHRvbnNcIjogXCJVcGxvYWRJbWFnZV9idXR0b25zX19qMTJSaFwiLFxuXHRcImJ0bl9fY2xlYXJcIjogXCJVcGxvYWRJbWFnZV9idG5fX2NsZWFyX19pYkdUdVwiLFxuXHRcImJ0bl9fdXBsb2FkXCI6IFwiVXBsb2FkSW1hZ2VfYnRuX191cGxvYWRfX1k0RlZMXCIsXG5cdFwiaW1nX19wcmV2aWV3XCI6IFwiVXBsb2FkSW1hZ2VfaW1nX19wcmV2aWV3X18ycVBFSVwiLFxuXHRcImZpbGVfX21ldGFkYXRhXCI6IFwiVXBsb2FkSW1hZ2VfZmlsZV9fbWV0YWRhdGFfXzM3UmlHXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9