import React from 'react';
import EditorTemplate from '../compoenets/editor/EditorTemplate';
import EditorHeader from '../compoenets/editor/EditorHeader';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';
import PreviewPaneContainer from '../containers/editor/PreviewPaneContainer';

const EditorPage = () => {
    return(
        <div>
            <EditorTemplate
                header = {<EditorHeader/>}
                editor = {<EditorPaneContainer/>}
                preview = {<PreviewPaneContainer/>}
            />
        </div>
    );
};

export default EditorPage;