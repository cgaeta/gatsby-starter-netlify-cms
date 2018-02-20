import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import HexPreview from './preview-templates/HexPreview';
import HexGridPreview from './preview-templates/HexGridPreview';


CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('hex', HexPreview);
CMS.registerPreviewTemplate('hexGrid', HexGridPreview);
