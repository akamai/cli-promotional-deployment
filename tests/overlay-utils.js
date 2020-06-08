//  Copyright 2020. Akamai Technologies, Inc
//  
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//  
//      http://www.apache.org/licenses/LICENSE-2.0
//  
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.




const createOverlayUtils = function(baseUtils, callback, classOnly = false) {
    class OverlayUtils extends baseUtils {
        readJsonFile(path) {
            return callback(path, super.readJsonFile(path), "read");
        }
        writeJsonFile(path, data) {
            data = callback(path, data, "write");
            if (data) {
                super.writeJsonFile(path, data);
            }
        }
        fileExists(path) {
            return callback(path, super.fileExists(path), "exists");
        }
    }
    if (classOnly) {
        return OverlayUtils;
    } else {
        return new OverlayUtils();
    }
};

module.exports = createOverlayUtils;