import React from 'react';
import EditorTemplate from '../compoenets/editor/EditorTemplate';
import EditorHeader from '../compoenets/editor/EditorHeader';
import PreviewPane from '../compoenets/editor/PreviewPane';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';

const EditorPage = () => {
    return(
        <div>
            <EditorTemplate
                header = {<EditorHeader/>}
                editor = {<EditorPaneContainer/>}
                preview = {<PreviewPane/>}
            />
        </div>
    );
};

export default EditorPage;