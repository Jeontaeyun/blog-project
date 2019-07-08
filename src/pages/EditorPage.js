import React from 'react';
import EditorTemplate from '../compoenets/editor/EditorTemplate';
import EditorHeader from '../compoenets/editor/EditorHeader';
import EditorPane from '../compoenets/editor/EditorPane';
import PreviewPane from '../compoenets/editor/PreviewPane';

const EditorPage = () => {
    return(
        <div>
            <EditorTemplate
                header = {<EditorHeader/>}
                editor = {<EditorPane/>}
                preview = {<PreviewPane/>}
            />
        </div>
    );
};

export default EditorPage;