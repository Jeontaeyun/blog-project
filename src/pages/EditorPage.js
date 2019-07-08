import React from 'react';
import EditorTemplate from '../compoenets/editor/EditorTemplate';

const EditorPage = () => {
    return(
        <div>
            <EditorTemplate
                header = '헤더'
                editor = '에디터'
                preview = '프리뷰'
            />
        </div>
    );
};

export default EditorPage;