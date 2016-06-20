/**
 * Created by kerovieux on 16/5/1.
 */

export default {
    config: {
        htmlLayout:'<div class="bg-primary top_bar" id="pageHeader"></div> <div id="pageBody"></div> <footer class="page_footer bg-white" id="pageFooter"></footer>',
        domain:'http://120.27.26.37/'
    },
    extraData: {
        errorHtml:'<div class="modal fade" id="modal_error"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">提示</h4> </div> <div class="modal-body"> <p>连接失败,请重试!</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary">知道了</button> </div> </div> </div> </div>'
    },



}